import React from "./rightBar.scss";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span><b>Suggestion For You</b></span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Akash Mandal</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://phantom-marca.unidadeditorial.es/f07a6e2a95fad43b461b40590225e38d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/31/16725192936240.jpg" alt="" />
                            <span>Leo Messi</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span><b>Latest Activities</b></span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://phantom-marca.unidadeditorial.es/f07a6e2a95fad43b461b40590225e38d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/31/16725192936240.jpg" alt="" />
                            <p><span>Leo Messi</span> changed their cover photo.
                            </p>
                            
                        </div>
                       <div><span>10 min ago</span></div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                            <p><span>Akhil Sharma</span> shared a story.
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <p><span>Jane Doe</span> commented on a post.
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                            <p><span>Akhil Sharma</span> liked a post.
                            </p>
                        </div>
                       <span>1 s ago</span>
                    </div>
                </div>
                <div className="item">
                    <span><b>Online Friends</b></span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                            <div className="online" />
                            <span>Akhil Sharma</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://phantom-marca.unidadeditorial.es/f07a6e2a95fad43b461b40590225e38d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/31/16725192936240.jpg" alt="" />
                            <div className="online" />
                            <span>Leo Messi</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <div className="online" />
                            <span>Paul Gathod</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <div className="online" />
                            <span>Allen</span>
                        </div>
                    </div>
                    {/* <div className="user">
                        <div className="userInfo">
                            <img src="https://phantom-marca.unidadeditorial.es/f07a6e2a95fad43b461b40590225e38d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/31/16725192936240.jpg" alt="" />
                            <div className="online" />
                            <span>Leo Messi</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default RightBar