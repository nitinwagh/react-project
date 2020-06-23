import React, { Component, Fragment } from 'react';
import {
    Segment,
    Item,
    Divider,
    Button,
    Loader,
    Dimmer,
    Header,
    Modal,
    Form,
    Input,
    TextArea
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getPosts, addPost } from './actions'


class Posts extends Component {

    state = {
        openModal: false,
        description: '',
        title: ''
    }

    componentDidMount() {
        this.props.getPosts()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.isSuccess !== this.props.isSuccess) {
            this.setState({
                openModal: false,
                description: '',
                title: ''
            })
        }
    }

    handleToggleModal = () => {
        this.setState({
            openModal: !this.state.openModal,
            description: '',
            title: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const { title, description } = this.state
        let post = {
            title,
            description
        }
        this.props.addPost(post)

        setTimeout(() => {
            this.setState({
                openModal: false,
                description: '',
                title: ''
            })
        }, 1500)
    }

    render() {
        const { isLoading, posts} = this.props
        const { openModal, description, title } = this.state
        return(
            <Fragment>
                <Segment key={1}>
                    <Button onClick={this.handleToggleModal} primary>Add Post</Button>
                </Segment>
                <Segment key={2} style={{minHeight: '100px'}}>
                    {isLoading
                    ? <Dimmer active>
                        <Loader content='Loading' />
                    </Dimmer>
                    : <Item.Group>
                        {(posts.length > 0) && posts.map(post => {
                            return (
                                <Fragment key={post.id}>
                                    <Item key={post.id}>
                                        <Item.Content>
                                            <Item.Header as='a'>{post.title}</Item.Header>
                                            <Item.Meta>{post.body}</Item.Meta>
                                            <Item.Description></Item.Description>
                                        </Item.Content>
                                    </Item>
                                    <Divider />
                                </Fragment>
                            )
                        })}
                    </Item.Group>}
                </Segment>
                <Modal
                    open={openModal}
                    onClose={this.handleToggleModal}
                    closeIcon
                    centered={false}
                >
                    <Header content='Add New Post' />
                    <Modal.Content>
                        <Form>
                            <Form.Field
                                id='title'
                                control={Input}
                                label='Title'
                                name='title'
                                value={title}
                                placeholder='Title here...'
                                onChange={this.handleChange}
                            />
                            <Form.Field
                                id='description'
                                control={TextArea}
                                label='Description'
                                name='description'
                                value={description}
                                placeholder='Description here...'
                                onChange={this.handleChange}
                            />
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.handleToggleModal}>
                           Cancel
                        </Button>
                        <Button loading={isLoading} onClick={this.handleSubmit} color='green'>
                            Save
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
    isLoading: state.postsReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    addPost: (post) => dispatch(addPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
