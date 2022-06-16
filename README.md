# **Cold Banana Tech Task**

Create a web page in line with one of the designs below, you can choose between a product listing or a location listing template. Both require you to fetch data from an API endpoint and display the data in the response, detailed below.

[Design](https://tinyurl.com/mtzezkzv)

There is no restriction as to what framework or stack you use, it is up to you.

Contents:

- [**Cold Banana Tech Task**](#Cold_Banana_Tech_Task)
  - [## **Setup**](#-setup)
    - [**Requirements**](#requirements)
    - [**Gettins Started**](#Gettins-Started)
  - [## **Planning**](#-planning)
  - [## **Features**](#-features)
  - [## **Version Management**](#-version-management)
  - [## **Challenges**](#Challenges)
  - [## **Improvements**](#-improvements)
    - [Testing](#testing)
    - [Styling](#styling)
    - [Component Architecture](#Component-Architecture)
    - [API Request](#api-request)

## **Setup**

---

### **Requirements**

Check you have npm installed by running npm -v.

### **Gettins Started**

Clone git repository and run npm install in the project folder:

`git clone https://github.com/Harry-Gardiner/Cold-Banana.git`

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## **Planning**

---

## **Features**

---

**E.g.**

Text here

## **Version Management**

---

I used git and GitHub throughout the project. I used the Feature Branch Workflow, by working on feature branches that were merged back into main using pull requests from GitHub.

## **Challenges**

---

### Font Sizing

I decided to use CSS tricks clever approach to fluid typography, see [link](https://css-tricks.com/snippets/css/fluid-typography/). It enables you to set max and min viewport widths as well as max and min font sizes. That way depending on the screen size the font will be auto calculated between its ranges.

## **Improvements**

---

### Testing

### Styling

### Component Architecture

Give each component its own directory. This would enable me to store files that are related to a component. Saw this file strucutre when researhcing online and thought thats is a good idea.

### API Request

With a large data set grabbing all the products in one go could place alot of stress on the clients PC. If the API would allow I would rewrite the axios request to return products in sets of 6. The load more button would then request an additional 8 from the API and append to current data array.
