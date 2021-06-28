
# Marvel Hero

Marvel Hero is a cross-platform mobile application that uses the Marvel Developers API. On the first launch, the user starts with an onboarding screen that identifies the app using promotional interfaces. On the last screen of the onboarding, the user chooses a favorite hero and goes up to the comics screen. The comics displayed depend on the hero selected, relevant details such as price and issue number are printed. Marvel Hero offers the ability to change your favorite hero at any time.


  
## Screenshots
### OnBoarding Screen


![App Screenshot](https://user-images.githubusercontent.com/63839876/122284542-9a825f00-cee5-11eb-8223-448ab2ddfa10.png)

![App Screenshot](https://user-images.githubusercontent.com/63839876/122284559-a0784000-cee5-11eb-883f-40f1f231a8dd.png)

![App Screenshot](https://user-images.githubusercontent.com/63839876/122284625-af5ef280-cee5-11eb-9a2e-4cc39ed357e3.png)

![App Screenshot](https://user-images.githubusercontent.com/63839876/122284664-b980f100-cee5-11eb-8b2c-7cf486049683.png)

 ### Heroes List Screen

 ![App Screenshot](https://user-images.githubusercontent.com/63839876/122284687-c00f6880-cee5-11eb-9775-1988eee63de8.png)

 ### Comics Screen

 ![App Screenshot](https://user-images.githubusercontent.com/63839876/122285086-2f855800-cee6-11eb-93b3-abf473fa10ae.png)

## Installation 

First of all, you need Node and Expo installed on your computer.

 ### Steps 
  - clone the repository.
  - cd marvelHero.
  - yarn install

## Execution
 Note that you need Expo application installed on either your physical device or emulator

```bash
  yarn start 
```
    
## Environment Variables

 To simplify execution of my task Environment variables are stored in networking.js file but in a real world project, you will need to create network.env file in the workspace root and then add the following environment variables to it.

`HASH` : md5(timestamp+PrivateKey+PublicKey)

`KEY`: Public Key

`TIME_STAMP`: //timestamp

 MarvelHero consumes Marvel API, Therefore you need to head to [Marvel Developer Website](https://developer.marvel.com/). There you'll get an API key and a private key. More details are of course found on marvel website.

  
## Running Tests

To run tests, run the following command

```bash
  yarn test
```

  