import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Form,
  Image,
  TextArea,
  TextInput,
  TopNav,
} from "@avaya/neo-react";

import logo from "./assets/logo.svg";

import "./App.css";

function App() {
  return (
    <main>
      <TopNav
        title="Neo Demo Site"
        logo={
          <a href="/" title="Logo Link">
            <Image isDecorativeOrBranding src={logo} />
          </a>
        }
      >
        <TopNav.LinkButton href="/products">Products</TopNav.LinkButton>
        <TopNav.LinkButton href="/about">About Us</TopNav.LinkButton>
        <TopNav.LinkButton href="/contacts">Contacts</TopNav.LinkButton>

        <TopNav.IconButton aria-label="Dashboard" icon="dashboard" />
        <TopNav.IconButton aria-label="Settings" icon="settings" />

        <div className="avatar-spacer">
          <TopNav.Avatar avatar={<Avatar initials="JS" />} />
        </div>
      </TopNav>

      <section className="form-container">
        <h4>User Profile</h4>

        <Form>
          <TextInput label="Full Name" name="name" required />
          <TextInput label="Email" name="email" required />
          <TextInput label="Username" name="username" required />
          <TextArea label="Comments" name="comments" />

          <CheckboxGroup
            label="Subscribe to Newsletter"
            groupName="checkbox-group"
          >
            <Checkbox value="newsletter">
              I agree to receive emails from Avaya
            </Checkbox>
          </CheckboxGroup>

          <div className="button-container">
            <Button variant="primary">Submit</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </Form>
      </section>
    </main>
  );
}

export default App;
