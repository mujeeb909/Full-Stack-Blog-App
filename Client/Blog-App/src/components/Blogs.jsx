import React from "react";
import "../App.css";

const Blogs = () => {
  return (
    <>
      <div className="post">
        <div className="image">
          <img
            src="https://images.ctfassets.net/lzny33ho1g45/6VKTwnI7mPNdyqUiPdbb9X/f034c294e528cfd91a4dd6ab6f6d4137/wordpressCOM.png?w=1400"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>First blog</h2>
          <p className="info">
            <a href="" className="author">
              Sir Yasir
            </a>
            <time>2023-02-01 03:15pm</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            laudantium laboriosam dolorem, facilis quo cupiditate eos odit illum
            deserunt soluta beatae dolorum omnis optio voluptatibus et enim
            eaque tenetur debitis!
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://images.ctfassets.net/lzny33ho1g45/3HyHu84fAmRwR6Wa0vYI2g/25e096cca69d0550b7f038ef37505641/image10.png?w=1400"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>Second blog</h2>
          <p className="info">
            <a href="" className="author">
              Sir Yasir
            </a>
            <time>2023-02-01 03:15pm</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            laudantium laboriosam dolorem, facilis quo cupiditate eos odit illum
            deserunt soluta beatae dolorum omnis optio voluptatibus et enim
            eaque tenetur debitis!
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://images.ctfassets.net/lzny33ho1g45/MXwmM3tN3QjL9iMcNFBux/ea6a88a01c3023122d958ee6550ba0a0/image13.png?w=1400"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>Third blog</h2>
          <p className="info">
            <a href="" className="author">
              Sir Yasir
            </a>
            <time>2023-02-01 03:15pm</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            laudantium laboriosam dolorem, facilis quo cupiditate eos odit illum
            deserunt soluta beatae dolorum omnis optio voluptatibus et enim
            eaque tenetur debitis!
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>Forth blog</h2>
          <p className="info">
            <a href="" className="author">
              Sir Yasir
            </a>
            <time>2023-02-01 03:15pm</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            laudantium laboriosam dolorem, facilis quo cupiditate eos odit illum
            deserunt soluta beatae dolorum omnis optio voluptatibus et enim
            eaque tenetur debitis!
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
