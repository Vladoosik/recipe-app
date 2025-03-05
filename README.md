## Step 1: Clone the project
first of all you need clone this project using git.
Go to console and choose the  desired folder where you want to deploy the project. 
Write on console the following command:

```bash
git clone https://github.com/Vladoosik/recipe-app.git
```

Wait until cloning is completed, then proceed to the next step


## Step 2: Install the required modules
In order for the project to run, you need to install the necessary modules; this
can be done by writing the following command in the terminal:

```bash
npm install
```
The project uses only the **npm** package manager, you will need to install it first

## Step 3: Start the Local Server

Third, you will need to start **Local Server**,

To start server, run the following command from the _root_ of this Next JS project:

```bash
npm run dev 
```
After the local server is started, go to **localhost:3000** in any browser

## You are awesome


If you did everything correctly, the functionality of the site will be available to you 

It has 3 screens 

### 1. Home page

On this page you can enter all the necessary information, the name of the dish, the country in which this dish is available and the maximum amount of time for its preparation

### 2. List of dishes

The found dishes that you entered in the previous screen will be shown here. When you click on one of the dishes you will be redirected to the next page

### 3. Ricepts

This screen will display the recipe for the dish selected from the previous screen. Ingredients, number of servings and preparation method will be shown.