import React from 'react';
import NotFoundImg from "../../static/img/notFoundImg.png";
import "./News.scss";

const News = ({ news }) => {
    return (
        <div className="row">
            { news.map(n => (
                <div
                    key={n.url}
                    className="col-md-4 col-lg-3 my-2"
                >
                    <div class="card">
                        <img
                            class="card-img-top image-new"
                            src={n.urlToImage ? n.urlToImage : NotFoundImg }
                            alt={n.title}
                        />
                        <div class="card-body">
                            <h5 class="card-title">{n.title}</h5>
                            <p class="card-text">{n.description}</p>
                            <span className="source-new">{n.source.name}</span>
                            <a
                                href={n.url}
                                class="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Show more...
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default News
