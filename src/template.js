export default (body,gists) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body style="margin: 50px">
 
 <p>
  This code demonstrates using server side React rendering to speed up the
  appearance of html and handle SSO Issues. On the server side, code renders a
  non functioning html version of the components, and also fetches any initial
  data and passes it by props via a script tag. The client version of the code, 
  which is active, will read this initial data by props that point to the script
  tag.
 </p>
 <h3>From the Client React Code</h3>
 
 
 
      <div id="app">${body}</div>
  
 <hr/> 
  
  <h3>From The Server</h3>
 
     <p>The html below is layed over the div which the client react code uses as its writing entry point.
      Special ids are written by the react server toString method to allow the client
      code to mesh with the server html</p>
  
     <div style="border: thin solid black; padding:20px" id="slushMuffin">${body}</div>
  
  
     <script>window.gists = ${gists}</script>
      <script src="/bundle.js"></script>
    </body>
  </html>
`
