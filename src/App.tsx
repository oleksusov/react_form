import classNames from 'classnames';
import React, { useState } from 'react';
import './App.scss';

export const App: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [hasFirstName, setHasFirstName] = useState(false);
  const [hasLastName, setHasLastName] = useState(false);
  const [hasEmail, setHasEmail] = useState(false);

  const handleFirsNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasFirstName(false);
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasLastName(false);
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasEmail(false);
    setEmail(event.target.value);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');

    setHasFirstName(false);
    setHasLastName(false);
    setHasEmail(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setHasFirstName(!firstName);
    setHasLastName(!lastName);
    setHasEmail(!email);

    if (!firstName || !lastName || !email) {
      return;
    }

    handleReset();
  };

  return (
    <div className="columns is-centered">
      <div className="column section is-one-quarter">
      <form
        className="box"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div className="field">
          <label className="label" htmlFor="firstName">First Name</label>

          <div className={
            classNames(
              'control',
              'has-icons-left',
              {
                'has-icons-right': hasFirstName,
              },
            )
          }
          >
            <input
              id="firstName"
              className={
                classNames(
                  'input',
                  {
                    'is-danger': hasFirstName,
                  },
                )
              }
              type="text"
              placeholder="First Name input"
              value={firstName}
              onChange={handleFirsNameChange}
            />

            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>

            {hasFirstName && (
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle has-text-danger" />
              </span>
            )}
          </div>

          {hasLastName && (
            <p className="help is-danger">This field is required</p>
          )}
        </div>

        <div className="field">
          <label className="label" htmlFor="lastName">Last Name</label>

          <div className={
            classNames(
              'control',
              'has-icons-left',
              {
                'has-icons-right': hasLastName,
              },
            )
          }
          >
            <input
              id="lastName"
              className={
                classNames(
                  'input',
                  {
                    'is-danger': hasLastName,
                  },
                )
              }
              type="text"
              placeholder="Last Name input"
              value={lastName}
              onChange={handleLastNameChange}
            />

            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>

            {hasLastName && (
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle has-text-danger" />
              </span>
            )}
          </div>

          {hasLastName && (
            <p className="help is-danger">This field is required</p>
          )}
        </div>

        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={
                classNames(
                  'input',
                  {
                    'is-danger': hasEmail,
                  },
                )
              }
              type="email"
              placeholder="Email input"
              value={email}
              onChange={handleEmailChange}
            />

            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>

            {hasEmail && (
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle has-text-danger" />
              </span>
            )}
          </div>

          {hasEmail && (
            <p className="help is-danger">This field is invalid</p>
          )}
        </div>

        <div className="buttons">
          <button type="submit" className="button is-link">
            Submit
          </button>

          <button type="button" className="button is-link is-light">
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};
