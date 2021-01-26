[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


# Rick-and-Morty


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
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
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

In this project I create a website for the famous television series Rick and Morty. All the information displayed on the page are consumed by a third-party API.

The website is capable of displaying all the information in the series (episodes, characters, locations) in an orderly manner so that you can navigate through the episodes and characters.

The third party API  used to make the requests is Rick and Morty.
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
  Origin Planet
  Episodes List where the character appears on

3. Locations
In this section you will obtain information about the locations of Rick and Morty:
  Name
  Type
  Dimension
  Characters that lives in that location


## Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [CSS](https://css-tricks.com)
* [JS](https://javascript.com)
* [JQUERY](https://jquery.com)
* [WEBPACK](https://webpack.js.org)
* [AXIOS](https://github.com/axios/axios)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```


### Installing

To intalling and use this project you will need:

1. Clone the repo
   ```sh
   git clone https://github.com/fab-rvn/Rick-and-Morty.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact

**Fabrizio Ervini** - [@faber_dev](https://twitter.com/faber_dev) - faber.rvn@gmail.com

Project Link: [https://github.com/fab-rvn/Rick-and-Morty.git](https://github.com/fab-rvn/Rick-and-Morty.git)


[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
