import * as React from "react"
// import components
import Navigaton from './components/Navigation'
import MainHeader from './components/MainHeader'
import Subtext from './components/Subtext'
import Button from './components/Button'
import Header from './components/Header'
import Feature from './components/Feature'
import Pricing from './components/Pricing'
import Form from './components/Form'
import Footer from './components/Footer'

// import images
import speed from '../images/speed.svg'
import affordable from '../images/affordable.svg'
import friendly from '../images/friendly.svg'
import shadow from '../images/hero-bottom-shadow.png'

// markup
const IndexPage = () => {
  return (
    <div className="overflow-hidden">
      <Navigaton></Navigaton>
    <main>
      {/* Start Hero section */}
    <section className="hero flex flex-col w-full">
    
    <div
     data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine"
    className="md:mt-20 lg:mt-28">
    <MainHeader text={"It's time to make your business stand out"}></MainHeader>
    <Subtext title={"GenZdev."} text={"is here to help you achieve your business and personal goals, all through a stylish theme"}></Subtext>
    <Button text={"Send A Request"}></Button>
    </div>
    <img className="absolute bottom-0" src={shadow} alt="Shadow" />
    </section>
    {/* End Hero Section */}

   
    

    {/* Start Details Section */}
    <section className="details relative">
      <div
      data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine"
      className="mt-4 lg:mt-16">
    <Header text={"Developing a new business is never easy, but GenZdev. is here to help"}></Header>
    <Subtext text={"With a super-fast Gatsby powered website you have the perfect platform to get your idea off the ground. Its the perfect template to help turn your idea into a reality."}></Subtext>
    <Button text={"Send A Request"}></Button>
    </div>
    <div
    data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine"
    className="mt-32">
    <Header text={"We have the website to help you suceed"}></Header>
    <Subtext title={"GenZdev"} text={"is perfect for helping to to start and grow your business. As you begin to gain new clients and expand you will see the benefits of a super-ftast Gatsby website"}></Subtext>
    </div>

    <div className="features md:flex md:flex-row md:justify-center my-16">
      <Feature src={speed} text={"Speedy"} subtext={"Super-fast response times ensure your business is not affected"} alt={"Speed"}></Feature>
      <Feature src={affordable} text={"Affordable"} subtext={"A choice of packages to suit every business type and size"} alt={"Piggy Bank"}></Feature>
      <Feature src={friendly} text={"Friendly"} subtext={"Advisors who are available 24/7, all with exprt knowledge"} alt={"Smily Image"}></Feature>
    </div>
    </section>
    {/* End Details Section */}

    <Header text={"Our Packages"}></Header>
    <div className="flex flex-row justify-center space-x-8">
      <Pricing></Pricing>
    </div>
    <Button text={"Send A Request"}></Button>
    <div
    data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine"
    className="mt-24">
    <Header text={"Contact GenZdev today and see how we can help your business grow"}></Header>
    <Subtext text={"Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"}></Subtext>
    </div>
    <div
    data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine"
    >
    <Form></Form>
    </div>
    </main>
    <Footer></Footer>
    </div>
  )
}

export default IndexPage
