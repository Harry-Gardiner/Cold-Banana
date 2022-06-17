# **Cold Banana Tech Task**

Create a web page in line with one of the designs below, you can choose between a product listing or a location listing template. Both require you to fetch data from an API endpoint and display the data in the response, detailed below.

[Design](https://tinyurl.com/mtzezkzv)

There is no restriction as to what framework or stack you use, it is up to you.

Contents:

- [**Cold Banana Tech Task**](#Cold_Banana_Tech_Task)
  - [## **Setup**](#Setup)
    - [**Requirements**](#Requirements)
    - [**Gettins Started**](#Gettins-Started)
  - [## **Planning**](#Planning)
  - [## **Features**](#Features)
  - [## **Version Management**](#Version-Management)
  - [## **Testing**](#Testing)
  - [## **Challenges**](#Challenges)
  - [## **Improvements**](#Improvements)
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

1. Design review using Figma, pull out font sizes, font family, colours, general spacing etc.
2. Project set up in Vue inc variables and packages.
3. Build on a component by component basis.
   Navbar mobile > Navbar desktop > Hero > Content section > Products grid > Products > Footer.
4. Test using responsively and browserstack
5. Rework/refactor code

## **Features**

---

Web page is responsive across all devices. Tested using [Responsively App](https://responsively.app/).

Use [Bootstrap](https://getbootstrap.com/) to assist with site layout. Used to add a container to the site and apply columns where required.

On scroll animations added using [AOS](https://michalsnik.github.io/aos/).

Load More button functionality applied. Initially only 6 products displayed, clicking the button will pull 6 more each time.

## **Version Management**

---

I used git and GitHub throughout the project. I used the Feature Branch Workflow, by working on feature branches that were merged back into main using pull requests from GitHub.

## **Testing**

---

Used console log to ouput API data and other variables set in data. Have commented most console logs for reference.

Tested device responsivness using Responsively App.

Site works on IOS and Apple. Tested using [BrowserStack](https://www.browserstack.com/).

## **Challenges**

---

Getting to grips again with Vue. Its been almost a year since I did a Vue porject so felt a bit rusty at the beginning and pace started slow. However, once I was familiar with vue templates development sped up and I really enjoyed working with localised files. Vue has some great documentation and plent of online resources/tutorials.

Struggled initially with methods of importing images. Spend some time reaserching options and decided to use the required method `:src="require('@/assets/images/Vector_min.png')"`.

Setting up global scss variables. Global variable configuration had to be set up within the vue.config file. Again a tutorial online came in handy.

Wanted to declare the API url in the .env file. However this was proving tricky to access in the code and was throwing errors, after some research its actually recommended withing vue to register a global using app.config.globalProperties.nameofvariable.

### Font Sizing

I decided to use CSS tricks clever approach to fluid typography, see [link](https://css-tricks.com/snippets/css/fluid-typography/). It enables you to set max and min viewport widths as well as max and min font sizes. That way depending on the screen size the font will be auto calculated between its ranges.

## **Improvements**

---

### Testing

I know git has some cool testing functionality that you can leverage. With more time would have been good to look into this.

### Styling

I normally only use the grid system from bootstrap, so as not to get all the other bulk it provides. However I couldnt figure out how to only pull in those files. So I opted for installing the whole package. With more time I would liked to have looked at using Tailwind. I've heard it can help style sites very quickly and provides much of the functionality Bootstrap does without the overriding styles.

### Component Architecture

Give each component its own directory. This would enable me to store files that are related to a component. Saw this file strucutre when researhcing online and thought that it was a good idea.

### API Request

With a large data set grabbing all the products in one go could place alot of stress on the clients PC. If the API would allow I would rewrite the axios request to return products in sets of 6. The load more button would then request an additional 8 from the API and append to current data array.
