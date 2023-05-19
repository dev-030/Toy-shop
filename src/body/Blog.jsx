import useTitle from "../hooks/useTitle"



export default function Blog(){

  useTitle('Blog')
    return(
      <div>
        <div className="bg-[#e9f8ff] min-h-[70vh]">
          <div className=" max-w-[60%]  m-auto mt-20 grid gap-5">

            <div className="collapse collapse-plus bg-white border border-base-300 rounded-box"tabIndex={0} >
              <div className="collapse-title font-bold underline underline-offset-[3px]">What is an access token and refresh token?</div>
              <div className="collapse-content">
                <p className="font-medium mb-5">an access token is like a key that allows a client application to access a user’s data from an API server. A refresh token is like a backup key that can be used to get a new access token when the old one expires.</p>
                <div>
                  <div className="collapse collapse-plus border border-base-300 rounded-box"tabIndex={0} >
                    <div className="collapse-title font-bold underline underline-offset-[3px]">
                      How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content font-medium">
                      <p>access and refresh tokens work together to allow a client application to access a user’s data from an API server. When an access token expires, a refresh token can be used to get a new one. On the client-side, these tokens can be stored securely in cookies or in an in-memory JavaScript variable.</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>


            <div className="collapse bg-white collapse-plus border border-base-300 rounded-box"tabIndex={0} >
            <div className="collapse-title font-bold underline underline-offset-[3px]">
              Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content font-medium">
              <p> SQL databases are like a well-organized filing cabinet where data is stored in a structured way with clear relationships between different pieces of data. NoSQL databases are more like a big box where you can throw in all kinds of data without worrying too much about its structure or relationships etc. SQL databases store the data in tables and NoSQL databases store them in a kind of JSON/BSON format.</p>
            </div>
            </div>


            <div className="collapse bg-white collapse-plus border border-base-300 rounded-box"tabIndex={0} >
              <div className="collapse-title font-bold underline underline-offset-[3px]">
                What is express js?
              </div>
              <div className="collapse-content font-medium">
                <p className="mb-5">Express js is a Node.js framework that provides a set of features.</p>
                <div>
                  <div className="collapse collapse-plus border border-base-300 rounded-box"tabIndex={0} >
                    <div className="collapse-title font-bold underline underline-offset-[3px]">
                      What is Nest JS (google it)?
                    </div>
                    <div className="collapse-content font-medium">
                      <p>Nest js is also another Node.js framework.It is said that if you're building a large-scale enterprise application with complex business logic, NestJS may be the better choice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="collapse bg-white collapse-plus mb-10 border border-base-300 rounded-box"tabIndex={0} >
              <div className="collapse-title font-bold underline underline-offset-[3px]">
                What is MongoDB aggregate and how does it work ?
              </div>
              <div className="collapse-content font-medium">
                <p>In simpler terms, MongoDB aggregation is a way to process and analyze data stored in MongoDB. It works by grouping data together and then performs calculations on that grouped data to produce a result.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
}