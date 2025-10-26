"use client"
export default function Section2() {
  return (
    <>
   <div className="quote-section">
  <div className="quote-card">
    <div className="icon">
      <img src="/img/element-1.png" width="20px" alt="" />
    </div>
    <p className="quote-text">
      "I enjoy being involved with my community. As a dentist, you get to meet a
      lot of people, and potentially help a lot of people, too."
    </p>
    <p className="quote-author">Dr. Maynard</p>
  </div>
</div>
<style jsx>{`
        .experience-list {
          border: 0px solid rgba(0, 0, 0, 0.05);
          border-radius: 0px;
        }
        .resume-area {
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .quote-section {
          position: relative;
          background: url('/img/image-2.png') no-repeat center center/cover;
          background-attachment: fixed;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: left;
          padding: 2rem;
          height: 100vh;
          color: #fff;
        }
        .quote-card {
          position: relative;
          z-index: 2;
          max-width: 420px;
          background: rgb(0 0 0 / 2%);
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }
        .quote-card .icon {
          font-size: 2rem;
          color: #6c757d;
          margin-bottom: 1rem;
        }
        .quote-text {
          font-size: 1.1rem;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.5;
        }
        .quote-author {
          font-size: 1rem;
          margin-top: 1rem;
          font-weight: 500;
          color: #ffffff;
        }
      `}</style>

  </>
  
  
  )
}
