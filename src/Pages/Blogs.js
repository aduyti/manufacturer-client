import React from 'react';

const Blogs = () => {
    return (
        <div className="px-8 md:px-20">

            <div className="w-full bg-base-100 rounded-xl mt-8">
                <h1 className="text-2xl font-bold">How will you improve the performance of a React Application</h1>
                <p>
                    reduce unnecessary states. keep state local as possible. avoid unnecessary component render.
                    try to reuse code.
                </p>
            </div>



            <div className="w-full bg-base-100 rounded-xl mt-8">
                <h1 className="text-2xl font-bold">What are the different ways to manage a state in a React application?</h1>
                <p> few ways to manage state in React </p>
                <ul>
                    <li>using useState hook</li>
                    <li>applying custom hook to manage state</li>
                    <li>passing state the child components</li>
                    <li>placing state in parent component to share between child components</li>
                    <li>Context API or Redux as state container</li>
                </ul>
            </div>



            <div className="w-full bg-base-100 rounded-xl mt-8">
                <h1 className="text-2xl font-bold">How does prototypical inheritance work?</h1>
                <p> prototypical inheritance helps to use methods and properties of other objects. usually need to use __proto__ keyword to apply prototypical inheritance.</p>
            </div>



            <div className="w-full  bg-base-100 rounded-xl mt-8">
                <h1 className="text-2xl font-bold">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p>state in React can not be changed directly. if you try to change it directly, the state value will remain unchanged. trying directly changing state does not affect DOM</p>
            </div>



            <div className="w-full bg-base-100 rounded-xl mt-8">
                <h1 className="text-2xl font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>myArray.find(product={'>'}product.name===targeName)</p>
            </div>



            <div className="w-full bg-base-100 rounded-xl mt-8">
                <h1 className="text-2xl font-bold">What is a unit test? Why should write unit tests?</h1>
                <p>unit test is a procedure that helps to test an application through its smaller code. unit testing helps us to detect and fix bugs in each parts od development.in unit test each module are tested separately to reduce dependencies.</p>
            </div>



        </div>
    );
};

export default Blogs;