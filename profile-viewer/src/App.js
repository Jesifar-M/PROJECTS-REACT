import React, { useEffect, useState } from "react";
import "./App.css";

const profile = {
  name: "Alice",
  fullName: "Alice Morgan",
  role: "Product designer & creative thinker",
  location: "Brooklyn, New York",
  bio: "I turn thoughtful ideas into simple, useful digital experiences. When I’m away from my desk, you’ll find me sketching, exploring the city, or searching for a great cup of coffee.",
  initials: "AM",
  skills: ["UI/UX Design", "Prototyping", "Design Systems"],
  email: "hello@alicemorgan.example",
};

function App() {
  const [userName, setUserName] = useState("Guest");
  const isViewingProfile = userName === profile.name;

  useEffect(() => {
    document.title = isViewingProfile
      ? `${profile.fullName} | Profile Viewer`
      : "Profile Viewer";
  }, [isViewingProfile]);

  function loginAsAlice() {
    setUserName(profile.name);
  }

  function returnToGuest() {
    setUserName("Guest");
  }

  return (
    <main className="app-shell">
      <header className="site-header">
        <div className="brand" aria-label="Profile Viewer">
          <span className="brand-mark" aria-hidden="true">p.</span>
          <span>profile viewer</span>
        </div>
        <span className="viewer-status">
          <span className="status-dot" aria-hidden="true" />
          {isViewingProfile ? `Viewing as ${userName}` : "Guest view"}
        </span>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">A little corner of the internet</p>
        <h1 id="page-title">
          {isViewingProfile ? `Welcome, ${userName}!` : "People, in a little more detail."}
        </h1>
        <p className="intro-copy">
          {isViewingProfile
            ? "Here's the story, the work, and a few things that make Alice who she is."
            : "Take a closer look at the people behind the work."}
        </p>
      </section>

      <section className="profile-card" aria-label={`${profile.fullName} profile`}>
        <div className="profile-cover">
          <span className="cover-orbit cover-orbit-one" aria-hidden="true" />
          <span className="cover-orbit cover-orbit-two" aria-hidden="true" />
          <span className="cover-label">
            {isViewingProfile ? "PROFILE" : "PROFILE PREVIEW"}
          </span>
        </div>

        <div className="profile-content">
          <div className="profile-heading">
            <div className="avatar" aria-label={`${profile.fullName} initials`}>
              {profile.initials}
            </div>
            <div className="profile-identity">
              <h2>{profile.fullName}</h2>
              <p>{profile.role}</p>
            </div>
            <span className="availability">
              <span className="status-dot" aria-hidden="true" />
              Open to work
            </span>
          </div>

          {isViewingProfile ? (
            <>
              <p className="profile-bio">{profile.bio}</p>

              <div className="profile-details">
                <div className="detail-block">
                  <h3>Based in</h3>
                  <p>{profile.location}</p>
                </div>
                <div className="detail-block">
                  <h3>Things I do</h3>
                  <ul className="skill-list">
                    {profile.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="profile-actions">
                <a className="primary-button" href={`mailto:${profile.email}`}>
                  Say hello <span aria-hidden="true">↗</span>
                </a>
                <button className="text-button" onClick={returnToGuest}>
                  Back to guest view
                </button>
              </div>
            </>
          ) : (
            <div className="guest-prompt">
              <div>
                <h3>Curious to know more?</h3>
                <p>Step inside Alice’s profile to explore her work and interests.</p>
              </div>
              <button className="primary-button" onClick={loginAsAlice}>
                Login as Alice <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="site-footer">
        <span>Made for getting to know people.</span>
        <span>Profile Viewer <span aria-hidden="true">·</span> 2026</span>
      </footer>
    </main>
  );
}

export default App;
