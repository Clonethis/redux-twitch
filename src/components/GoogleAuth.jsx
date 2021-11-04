import React from "react";

export default class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    //   this will request google api functions to oauth
    //  if 'client:auth2' fetched then run 'client.init' with our client iD
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "55811889450-8qolm00bkfa2sol5hrohg2v1hq4dce8k.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          console.log("this.auth ", this.auth);
          this.auth.isSignedIn.listen(this.onAuthChange);
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  onAuthChange = () => {
    // automatic update of text
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      console.log("data, tru");
      return null;
    } else if (this.state.isSignedIn) {
      console.log("data, second true");
      return (
        <div className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon"></i>
          Sign Out
        </div>
      );
    } else {
      console.log("data, false");
      return (
        <div className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon"></i>
          Sign In
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {/* <div className="item">Google Auth</div> */}
        <div className="item">{this.renderAuthButton()}</div>
      </div>
    );
  }
}
