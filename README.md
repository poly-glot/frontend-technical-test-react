# Company Name - React Engineer Technical Test
> It is an advanced level test that we require selected react developers to participate. We do not pay or use any of the work produced in a commercial environment. 

If you have come directly to this repository without a reference and curious to try out this technical test - then please contact hr@company.com to get yourself started!

## System requirements
You’ll want to ensure you have the following already installed on your local machine before getting started with the test:

* **Node 12+:** The current LTS (long-term support) release. We like to use a Node Version Manager like NVM.

* **NPM 6+ or Yarn:** Both of these package managers have ups and downs, choose whichever you prefer. Follow the installation instructions for Yarn or NPM to make sure you're using the latest version.

* **Docker**

## Brief
You have been supplied a [Figma design link](https://www.figma.com/file/hF0caLdI5OVX1LoCicbIUx/Front-end-Technical-Test?node-id=0%3A1) to a basic application. The Figma prototype also includes a simple style guide and component library for reference. We recommend using the spacing and layout variables to define the proximity between elements.

We have supplied all breakpoints. However, we would like you to think about how each of the components responds to the sizes in between. The solution is open to interpretation.

## Requirements
**Responsive Banner Area**

Implement area filled with grey background as per provided design.

* On Mobile & Tablet it should maintain 16x9 ratio.
* On Desktop, height should be dynamic and take all available space in the container.

**Button Switch**

Finish Button Switch interaction which is available under label "What are you looking for" so a user can select one option at a time.  

**Phone Field**

Change Flag based on user country code. 

* Country code can start with 00 or +. 
* If no country code match then show a default flag.
* A bug has been reported that user focus get lost when tab between field Location to Phone using Keyboard. This needs to be fixed.

**Form Submission**
- All form fields are required, if any of field is empty then show an error message.
- On valid form submission, post data to API. API URL should be supplied via ENV variable (REACT_API_URL) 

**Success Page**

Implement success page as per given design.

## Acceptance criteria

**We have a high focus on attention to detail in code**
* The formatting of the codebase should be consistent and written in a modular approach
* Internally, we use BEM - but we are open to other CSS naming conventions as long as it's built with scale and maintenance in mind
* We expect the codebase to be written using ES6+ and libraries kept to a minimum
* We expect code to be written with unit testing & performance in mind
* We expect the code to be included in the relevant files
* Mobile-first development approach using min-width media queries
* Solution should be accessible and meet WCAG Level A 
  
**We have a high focus on attention to detail in design**
* We expect the designs to match as closely as they can
* Correct fonts and sizes, correct colours, correct line-heights and letter-spacing
* Images to be cropped and sized correctly to designs using responsive picture
* Interactions and animations to be considered but not distracting users away from the experience
* Minimal visual bugs when going resizing to mobile and large screen sizes

## Scoring Criteria 

| Task                                           | Score |
|------------------------------------------------|-------|
| Match given design on Mobile, Tablet, Desktop. | 20    |
| Responsive Banner                              | 05    |
| Button Switch                                  | 05    |
| Phone Field                                    | 05    |
| Form Submission                                | 10    |
| Success Page                                   | 10    |
| Unit Test                                      | 15    |
| Accessibility                                  | 10    |
| Time to complete test                          | 20    |


## Tips
- Use Pretty / linting to format code and autofix most of the formatting issues
```shell script
npm run pretty
npm run lint
```
- Use [styleguidist](https://react-styleguidist.js.org/) to build components in isolation to help with modularity
```shell script
npm run styleguide
```

- Run Unit & Integration tests to ensure that you have not missed any expected behaviour
```shell script
npm run test
npm run integration
```

## Getting started
```shell script
npm install
npm start
```

## Reviewing and submitting your results
- Ensure that you have committed and pushed your most up to date changes to a public GitHub repo 
- Once happy with your work, please create a pull request for automated, manual code review 
- We will get back to you as soon as we can regarding your result!


## Cloud Secrets information
