const postModel = require('../models/postModel');

class PostController {
  createPost(data) {
    return new Promise(
      (resolve, reject) => {
        try {
          const newPost = new postModel(
            {
              title: data.title,
              content: data.content,
              author: data.author,
              tags: data.tags
            }
          )
          newPost.save().then(
            () => {
              resolve(
                {
                  message: 'Post created successfully',
                  status: 1
                }
              )
            }
          ).catch(
            (error) => {
              console.log(error)
              reject(
                {
                  message: 'Failed to create post',
                  status: 0,
                }
              )
            }
          )
        } catch (error) {
          reject(
            {
              message: "Internal server error",
              status: 0,
            }
          )
        }
      }
    )
  }


  get(postId) {
    return new Promise(
      async (resolve, reject) => {
        try {
          let post;
          if (postId) {
            post = await postModel.findById(postId);
          } else {
            post = await postModel.find();
          }

          resolve(
            {
              message: "Post fetched successfully",
              status: 1,
              data: Array.isArray(post) ? post.length : "1",// Ensure data is always an array
              post
            }
          )
        } catch (error) {
          console.log(error)
          reject(

            {
              message: "Internal server error",
              status: 0,
            }
          )
        }
      }
    )
  }

  update(id, data) {
    return new Promise(
      async (resolve, reject) => {
        try {
          const post = await postModel.findById(id);
          if (post) {
            postModel.updateOne(
              { _id: id },
              {
                ...data
              }
            ).then(
              (success) => {
                resolve(
                  {
                    message: "Post update successfully",
                    status: 1
                  }
                )
              }
            ).catch(
              (error) => {
                reject(
                  {
                    message: "unable to update post",
                    status: 0
                  }
                )
              }
            )
          } else {
            reject(
              {
                message: "post not found",
                status: 0
              }
            )
          }

        } catch (error) {
          console.log(error)
          reject(
            {
              message: "Internal server error",
              status: 0
            }
          )
        }
      }
    )
  }

  delete(id) {
    return new Promise(
      async (resolve, reject) => {
        try {
          const post = await postModel.findById(id);
          if (post) {
            postModel.deleteOne(
              { _id: id }
            ).then(
              (success) => {
                resolve(
                  {
                    message: "post deleted successfully",
                    status: 1
                  }
                )
              }
            ).catch(
              (error) => {
                reject(
                  {
                    message: "unable to delete post",
                    status: 0
                  }
                )
              }
            )
          } else {
            reject(
              {
                message: "post not found",
                status: 0
              }
            )
          }

        } catch (error) {
          reject(
            {
              message: "Internal server error",
              status: 0
            }
          )
        }
      }
    )
  }
}



module.exports = new PostController();
