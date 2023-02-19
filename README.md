
# AirBnb Experience Built With React. 
![airbnb](https://user-images.githubusercontent.com/77986239/219976623-deb01798-fff0-462e-b34c-3fd29a1746f4.PNG)


## Quick Setup
Fork then clone the project into local machine 🍴\
run 'npm install' in the root folder to install all the necessary packages 👩‍💻\
Happy coding 💻

**NB:**
1. Rendering a react component for every object in an array of objects.
1. Installing and using *bootstrap icons* in react
1. Conditional rendering e.g 
	```js
	{badgeText && <div className='card-badge'>{badgeText}</div>}
	```
1. Importing images from a folder
	```js
	<img src={require(`../images/${props.item.coverImg}`)} alt="experiences" />
	```
1. Hide scrollbar in horizontal scrolling
	```css
	/* Hide scrollbar for Chrome, Safari and Opera */
	.example::-webkit-scrollbar {
	   display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.example {
  	  -ms-overflow-style: none;  /* IE and Edge */
 	  scrollbar-width: none;  /* Firefox */
	}
	```
1. Passing objects as props\
      [ ] Passing each object item one at a time; ok if props are not many\
    
       ```js
        <Card 
            key={item.id}
            img ={require(`./images/${myObject.coverImg}`)}   
            rating = {myObject.stats.rating}   
            reviewCount = {myObject.stats.reviewCount} 
            location = {myObject.location}
            title = {myObject.title}
            price = {myObject.price}
            openSpots = {myObject.openSpots}
    
         />
     ```
     \     
     
     [x] Similar to the one above just using the spread operator which will spread all the props of the object into separate properties\
     
     	```js
        <Card 
            key={item.id}
	    {...myObject}     
    
         />
	```
