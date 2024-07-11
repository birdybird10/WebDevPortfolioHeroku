import React from "react";

function TopicsPage() {
  return (
    <>
      <h2>Web Development Concepts</h2>
      <nav class="local">
        <a href="#webServers">Web Servers</a>
        <a href="#frontendDesign">Frontend Design</a>
        <a href="#optimizingImages">Optimizing Images</a>
        <a href="#favicons">Favicons</a>
        <a href="#cascadingStylesheets">CSS</a>
        <a href="#forms">Forms</a>
        <a href="#express">Express</a>
        <a href="#javaScript">JavaScript</a>
      </nav>
      <article id="webServers">
        <h3>Web Servers</h3>
        <p>
          {/* <!-- Explain what index means as it relates to websites and servers. Refer to the concepts you learned about in the Explorations. --> */}
          Usually, the <strong>index.html</strong> file is the designated
          homepage for the website. When a client sends a GET request to the
          server for the “/” path, the server knows by default to look for the
          index.html file and include it in the response. The client will use
          the response headers and render the index.html file. This file can be
          expected to hold the main content of a website and might have a
          directory to other pages in the site.
        </p>
        <p>
          {/* <!-- Explain what can be seen in the browser's Web Dev/Inspector Network tab output screen. What is different about the file's details when viewed from the web server versus the local computer? --> */}
          When viewing from the web server, we see under the “name” column the
          request “a1-majors-al/,” which is the assignment folder. When we click
          this, we see in our <strong>header</strong> that we made a successful
          GET request for our URL. We also see a status code of 200, the remote
          address, and policy. The browser knows by default to look for the
          index.html file in our folder and display that. The <strong>response header</strong> shows us accepted ranges, the
          connection, date, and server, as well as content encoding, length, and
          type. The <strong>request header</strong> shows the cache, connection,
          accept-encoding and language. Both the web server and local computer
          show the raw response data, which is our index.html file. When viewing
          the file on our local computer, we see under the “name” column a
          request for just “index.html.” We do not have as many request headers
          and response headers as the web server had.
        </p>
        <p>
          {/* <!-- Explain why the favicon.ico file has a status 200, but the main.css and main.js files status 400. --> */}
          A <strong>status 200</strong> code means that a request has been
          successful. The favicon.ico file exists on the server and was
          successfully found and retrieved for our request. We did not create a
          main.css or main.js file in our assignment folder, therefore we get a <strong>status 400</strong> code, which means those files can’t be
          found on the server. The server can’t process our request for those
          files.
        </p>
        <p>
          {/* <!-- Explain the parts of the URL to your web file. What is the scheme, the subdomain, the host domain, and the resources? --> */}
          The full URL to my web file is
          “https://web.engr.oregonstate.edu/~majorsal/a1-majorsal”. The <strong>scheme</strong> is “https.” The scheme tells us the protocol
          used for sending the request. The two <strong>subdomains</strong> are
          “web” and “engr.” The full <strong>host domain</strong> is
          “web.engr.oregonstate.edu.” The <strong>resources</strong> are
          “​​~majorsal/a1-majorsal.” This path tells the server the exact
          location that the client is trying to go to, or what resource the
          client wants to access. In this case, we want to go to my personal web
          page on the server and then to the “a1-majorsal” folder.
        </p>
      </article>
      <article id="frontendDesign">
        <h3>Frontend Design</h3>
        <p>
          {/* <!-- The concept of frontend design, in a <p> paragraph. --> */}
          <strong>Frontend design</strong> refers to the overall experience,
          visual design, and graphical user-interface of a website. It is
          concerned with what the user can immediately see and engage with.
          Usability is an important component of frontend design. A website
          needs to be easy to browse and interact with, and should ideally be
          consistent with its appearance. If the design is too complicated and
          busy, then a user could get frustrated and not want to visit the site
          again. The user should also be able to tell where they are on a site
          and go back to previous pages with ease.
        </p>
        <h4>The five "E"s of usability:</h4>
        <dl>
          {/* <!-- The five "E"s of usability, in a <dl> definition list that separates the topics and descriptions.  --> */}
          <dt>Effective:</dt>
          <dd>
            A website should help a user accomplish a task and receive the
            desired result.
          </dd>
          <dt>Efficient:</dt>
          <dd>
            A user should be able to carry out a task as fast and as simple as
            possible. The website should avoid having any superfluous steps.
          </dd>
          <dt>Easy to navigate:</dt>
          <dd>
            A website should not be complicated to look at and browse. It should
            have different sections and labels, so users can quickly identify
            where it is they want to go.
          </dd>
          <dt>Error-free:</dt>
          <dd>
            Should a user make an error, a website needs to be prepared and be
            able to handle that error correctly. A website should be able to
            instruct a user to do something else or perhaps redirect the user to
            the correct location. We do not want the website to crash
            altogether.
          </dd>
          <dt>Enjoyable:</dt>
          <dd>
            A website should be pleasant to interact with. The user is not going
            to want to visit the website if it is too complicated or doesn’t
            accomplish what it is meant to.
          </dd>
        </dl>
        <p>
          {/* <!-- The purpose of each of the page layout tags, in a <p> paragraph. --> */}
          The <strong>header</strong> element is the main banner for a website.
          It typically stays the same between different pages and includes some
          type of identifying information, such as a name or slogan. The <strong>nav</strong> element is a block that links us to different
          locations or pages on the website. The <strong>main</strong> element
          defines the primary chunk of information for a webpage. The <strong>section</strong> element helps group elements and information
          together. Whatever is inside must be related. The <strong>article</strong> element goes inside a section element and is
          used to specify a subgroup of information. It likely has an h2 that
          tells us what the topic is. The <strong>aside</strong> element helps
          separate some additional information for an article. The <strong>figure</strong> element contains media and a caption belonging
          to that media. The <strong>blockquote</strong> element is used to
          organize an extended quotation. It might have a quote, citation, and
          footer. The <strong>footer</strong> element goes at the bottom of the
          HTML file, under the "/main" closing tag. It might contain links to
          other pages or have the copyright statement of the owner of the site.
          The <strong>div</strong> element is a more generic element that is
          used to group dynamic content together. If a more specific element
          does not apply to some content, then a div element might be used.
        </p>
        <h4>Anchors:</h4>
        <ol>
          {/* <!-- How anchors link to external content, internal content, and from page-to-page, in an <ol> ordered list.  --> */}
          <li>
            <strong>Anchors</strong> link to external content by including a
            “href” attribute, which contains the URL for the outside source.
          </li>
          <li>
            Anchors link to internal content by using a tag in the “href”
            attribute that connects to another element that has the matching
            “id” attribute. A h1 element could have "id=’apple’" and be
            connected to an anchor tag that has &lt;a href=”#apple”&gt;.
          </li>
          <li>
            Anchors link from page-to-page by including the URL of the new page
            in the “href” attribute.
          </li>
        </ol>
      </article>
      <article id="optimizingImages">
        <h3>Optimizing Images</h3>
        <p>
          {/* <!-- What are the 6 major specifications of images for the web? And why? --> */}
          The file name needs to be descriptive while also being concise. This
          provides search engines with the information necessary to categorize
          the image and find similar images. Smaller file sizes help reduce the
          load time of an image, and <strong>image compression</strong> can be
          used to store data efficiently. To help with load time, the size of an
          image should correspond with the dimensions of the web page. An image
          should not be too big for the page. An image should also be in its
          correct <strong>file format</strong>. Photos are .JPG, and line-art is
          .GIF or 8-bit .PNG. Different monitors have different resolutions, so
          we should provide different image sizes to match the lower and higher
          resolutions. Also, different types of files use different <strong>color modes</strong>. .PNG, .JPG, .SVG, and .WebP files use
          RGB, whereas .GIF and occasionally .PNG files are indexed.
        </p>
        <p>
          {/* <!-- Which file formats are most appropriate for photos and for line art? And why? --> */}
          Photos are typically a .JPG or .WebP file. The file size of a photo is
          very large due to all the colors and detail, so a photo must be
          compressed in order to be used on the web. A .JPG photo preserves its
          color well and can be downloaded quickly. A .WebP photo maintains its
          quality well and can be compressed more than a .JPG photo. Line art is
          typically a .PNG, .SVG, or .GIF file. .SVG files allow for
          two-dimensional, interactive, and animated images. A .SVG file can be
          scaled up or down easily. GIF files are lossless, have 8-bit
          transparency, are good for animation, and can be compressed greatly.
          .PNG files have true transparency and greater color depths, allowing
          for sharper edges.
        </p>
      </article>
      <article id="favicons">
        <h3>Favicons</h3>
        <p>
          {/* <!-- How do browsers and devices use favicons?  --> */}
          <strong>Favicons</strong> help browsers and devices easily identify a
          browser tab for a website or application. The browser finds the
          different files that have been saved for a favicon symbol and then
          saves and anchors the icon to the necessary destination. Favicons are
          located next to the title of a website in a browser tab, but they can
          also be seen in a favorites list or anywhere the developer has placed
          them. Favicons are seen on a wide array of devices, including laptops,
          tablets, phones, and smartwatches.
        </p>
      </article>
      <article id="cascadingStylesheets">
        <h3>CSS</h3>
        <p>
          {/* <!-- What are the main reasons to incorporate stylesheets in websites and apps? --> */}
          <strong>Stylesheets</strong> can be incorporated in websites to
          override the default styles of HTML tags. Adding style to our HTML
          elements makes a website easier to look at and navigate, improving
          usability. We can also add consistency and uniformity to our website
          by applying the same styles to various components. Giving components
          the same styles helps with the efficiency of our code, as we don’t
          have to declare the same styles repeatedly. Stylesheets also help make
          a website viewer-friendly for different devices.
        </p>
        <p>
          {/* <!-- What are the 5 ways to incorporate styles? And why? --> */}
          An external CSS file is usually linked in the head element of an HTML
          file with the link tag. If we have styles for specific components in a
          separate files, those files can be imported in the global stylesheet
          with “@import.” There are 4 different ways to embed styles directly in
          an HTML or JavaScript file. We can embed a style into the middle area
          of a style tag. We can add style inline with an element. The style
          needs to have an attribute with a desired value. Inside a function, we
          can use a JavaScript template literal. In JavaScript, we can use
          “document.getElementsByTagName()” with appended styles and pass in the
          tag we want to style.
        </p>
      </article>
      <article id="forms">
        <h3>Forms</h3>
        <p>
          {/* <!-- What are the 6 major goals of accessible forms? And why? --> */}
          An <strong>accessible</strong> form should provide clear instructions
          in its labels and above itself. This helps those who can’t read the
          screen. We should inform users of <strong>required</strong> fields and
          why their data is wanted. A user will feel better about submitting
          data if they know its purpose. We should also apply the autofocus
          attribute to the first field. This helps with efficiency, as the user
          can immediately start typing. It is important to avoid requiring the
          use of a mouse to fill out the form. Some people can’t use a mouse,
          so, ideally, a keyboard alone should be enough. <strong>Complex</strong> forms need to have tab indexing. This helps
          clarify the order for submitting different fields. Also, validation
          messages should be screen readable so that those who can’t see the
          screen still receive these messages.
        </p>
        <p>
          {/* <!-- What are the major tags, their attributes, and their purposes? --> */}
          The <strong>form</strong> tag has an action attribute, which says
          where the request should be sent, and a method attribute, holding the
          desired HTTP method to be used for submitting the request. The <strong>fieldset</strong> tag, which groups labels and controls, is
          accompanied by a <strong>legend</strong> tag, which describes the
          fieldset or prompts the user. These two tags help the
          visually-impaired understand the flow of a form. The <strong>label</strong> tag helps those with screen readers by
          describing the purpose of a control’s input. It has a for attribute,
          which corresponds with the control’s id attribute. The <strong>input</strong> tag is where a user enters data, and it has a
          type, name, and required attribute. The type attribute has different
          reference types, allowing a form to receive multiple kinds of data.
          The name attribute tells the server what value corresponds with the
          data in the form. The required attribute forces the user to fill out
          that input. The <strong>select</strong> tag implements a drop-down
          list of choices, where each choice exists inside an <strong>option</strong> tag. The select tag has a name attribute, which corresponds with each
          option tag’s value attribute. The <strong>text area</strong> tag has a
          label tag and gathers lines of text from the user. The <strong>button</strong> tag submits the form at the end.
        </p>
        <p>
          {/* <!-- What are the major form style recommendations to improve usability? And why? --> */}
          We can change the border, background color, margin, and padding of a
          fieldset to help it stick out and have space inside and around it. A
          legend tag with its own background color and border helps contrasts
          our labels. Labels can have a block display to be in their own line.
          Increasing or decreasing the font size of our text in different tags
          helps with readability, as this adds contrast. Larger text on an input
          or text area makes it easier for the user to see what they are typing.
          We should aim to keep our typography consistent and have our tags
          inherit the body’s font family. We can give required fields a red
          asterisk to alert the user that they must enter data. Also, changing
          the color of the border if a user enters invalid information helps
          notify them of an error in their input. We can also use the :disabled
          and :enabled attributes for complex forms so that the user enters
          their data in a logical order.
        </p>
      </article>
      <article id="express">
        <h3>Express</h3>
        <p>
          {/* <!-- What are these three technologies, and how can we use them to improve the web development experience? --> */}
          <strong>Node</strong> is a <strong>JavaScript</strong> platform that
          uses a V8 engine. We can run JavaScript code from a file with Node or
          use it as a JavaScript REPL. Node can help us create the server-side
          part of a web application and use asynchronous programming. <strong>npm</strong> is an online repository and a command-line
          utility. It contains multiple packages that we can import to use in
          our web applications. These packages are tested and help us write code
          more efficiently, as we don’t have to start completely from scratch. <strong>Express</strong> is a framework containing features that help
          us develop web applications. It allows us to use ports and <strong>routes</strong> to get, post, and delete data. We can also use
          middleware for our requests. Express communicates with Node’s HTTP
          server, which receives requests from and sends responses to the
          client.
        </p>
      </article>
      <article id="javaScript">
        <h3>JavaScript</h3>
        <p>
          {/* <!-- What are the main data types? --> */}
          The main <strong>data types</strong> in JavaScript are numbers,
          booleans, strings, symbols, special values being undefined and null,
          and objects.
        </p>
        <p>
          {/* <!-- How are objects, arrays, and JSON used? --> */}
          <strong>Objects</strong> are a collection of name-value pairs. <strong>Arrays</strong> are an object and store a collection of
          multiple values. We can convert our JavaScript objects into the <strong>JSON</strong> format and send this data to another
          application. JSON is language independent, so whoever receives the
          JSON data can turn the JSON string back into an object in whatever
          programming language they are using. We use JSON.stringify() and
          JSON.parse() to turn a JavaScript object into JSON and vice versa.
        </p>
        <p>
          {/* <!-- How are conditionals and loops used? --> */}
          <strong>Conditionals</strong> can be used to make different decisions
          in our code, check the validity of input, and compare multiple
          variables. We can create various outcomes based on a condition being
          true or false. <strong>Loops</strong> can be used to iterate over strings or objects,
          including arrays. We can also loop for a customized length or while a
          certain condition is true. When working in web applications, we can
          loop through our JSON data.
        </p>
        <p>
          {/* <!-- What is object-oriented programming? --> */}
          <strong>Object-oriented</strong> programming allows us to give an
          entity a state, identity, and behavior. In JavaScript, we can define
          objects on their own by giving them properties, or we can define
          classes, which we create objects from. A class is basically a
          blueprint for an object. This approach gives us the ability to have
          multiple objects of the same structure without having to rewrite the
          same code over and over again. Object-oriented programming helps us
          model real-world objects in code.
        </p>
        <p>
          {/* <!-- What is functional programming? --> */}
          <strong>Functional</strong> programming is an approach where we build
          our code based on the use of functions. In JavaScript, <strong>functions</strong> are <strong>“first-class”</strong> values.
          This means we can use them as arguments in other functions, assign
          them to a variable, and return them inside another function. <strong>Higher-order</strong> functions are those that pass in
          functions as arguments, and they can help to consolidate our code. For
          example, we can pass a function into the Array.map() function in
          JavaScript and get results without having to write a completely
          separate loop for the array.
        </p>
      </article>
    </>
  );
}

export default TopicsPage;
