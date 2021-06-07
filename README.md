# Rick-and-Morty

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
      <ul>
        <li><a href="#built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

<br>

## About the project

In this project I create a website for the famous television series Rick and Morty. All the information displayed on the page are consumed by a third-party API.

The website is capable of displaying all the information in the series (episodes, characters, locations) in an orderly manner so that you can navigate through the episodes and characters.

The third party API used to make the requests is Rick and Morty.
In this API you will see the HATEOAS and pagination concept applied in its structure. The main objective is to show the Rick and Morty episodes and navigate through the information it provides us.

The information that will be obtain from the API of each section is as follows:

1. Episodes
   In this section you will obtain information about the chapters of Rick and Morty:
   Name
   Air date
   Episode code
   Characters that appears on that episode

2. Characters
   In this section you will obtain information about the characters of Rick and Morty:
   Name
   Status
   Species
   Gender
   Image
   Location
   Episodes List where the character appears on

3. Locations
   In this section you will obtain information about the locations of Rick and Morty:
   Name
   Type
   Dimension
   Characters that lives in that location

<br>

## Built with

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [AXIOS](https://github.com/axios/axios)

<br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

<br>

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- yarn

  ```sh
  npm install --global yarn
  ```

- typescript
  ```sh
  yarn add typescript
  ```

<br>

### Installing

To intalling and use this project you will need:

1. Clone the repo
   ```sh
   git clone https://github.com/fab-rvn/Rick-and-Morty.git
   ```
2. Install NPM packages
   ```sh
   yarn
   ```
3. Start the project in your localhost
   ```sh
   yarn start
   ```

<br>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

<br>

## Author

<table>
  <tr>
    <td align="center"><a href="https://faberdev.netlify.app/"><img src="https://avatars.githubusercontent.com/u/66378887?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fabrizio Ervini</b></sub></a><br /></td>
  </tr>
</table>
