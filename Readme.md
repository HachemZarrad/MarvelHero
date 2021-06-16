
# Marvel Hero

Marvel Hero is a cross-platform mobile application that uses the Marvel Developers API. On the first launch, the user starts with an onboarding screen that identifies the app using promotional interfaces. On the last screen of the onboarding, the user chooses a favorite hero and goes up to the comics screen. The comics displayed depend on the hero selected, relevant details such as price and issue number are printed. Marvel Hero offers the ability to change your favorite hero at any time.


## Documentation

[Documentation](https://linktodocumentation)

  
## Screenshots
### OnBoarding Screen


![App Screenshot](https://im.ge/i/TRUwW)

![App Screenshot](https://im.ge/i/TR5ic)

![App Screenshot](https://im.ge/i/TR0lT)

![App Screenshot](https://im.ge/i/TRhK0)

 ### Heroes List Screen

 ![App Screenshot](https://im.ge/i/5.TR9cL)

 ### Comics Screen

 ![App Screenshot](https://im.ge/i/TRjGG)
## Installation 

First of all, you need Node and Expo installed on your computer.

### Steps 
  - clone the repository.
  - cd marvelHero.
  - ```bash
    yarn test
 ```

    
## Environment Variables

To run this project, you will need to create .env file in the workspace root and then add the following environment variables to your it.

`REACT_APP_HASH` : md5(timestamp+PrivateKey+PublicKey)

`REACT_APP_KEY`: Public Key

`REACT_APP_TS`: //timestamp

The process is simple, MarvelHero consumes Marvel API, Therefore you need to head to [Marvel Developer Website](https://developer.marvel.com/). There you'll get an API key and a private key. More details are of course found on mavel website.

  
## Running Tests

To run tests, run the following command

```bash
  yarn test
```

  