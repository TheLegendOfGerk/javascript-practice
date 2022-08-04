

class Dog {
      winking = false;
      constructor(headColor = this.dog.color) {
          this.head.color = headColor;
          this.createFace();
          this.createLeftEye();
          this.createRightEye();
          this.createMouth();

    }
      dog = {
        name: 'Spot',
        color: '#C4A484',
        speak: function () {
            alert('Woof!')
        }
      };
      head = {
        color: "yellow",
        height: "200px",
        width: "200px",
        radius: "50%",
        position: "relative",
      };
      leftEye = {
        color: "black",
        height: "50px",
        width: "25px",
        radius: "50%",
        position: "absolute",
        top: "50px",
        left: "45px",
      };
      rightEye = {
        color: "black",
        height: "50px",
        width: "25px",
        radius: "50%",
        position: "absolute",
        top: "50px",
        right: "45px",
      };
      mouth = {
        color: "transparent",
        height: "50px",
        width: "70px",
        radius: "50%",
        position: "absolute",
        top: "125px",
        right: "calc(50% - 35px)",
        borderBottom: "10px solid black",
      };
      face = null;
      left = null;
      createFace = function () {
  
        // createa a new div
        this.face = document.createElement("div");
        const div = this.face;
        div.style.display = 'inline-block';
        // place it in the body
        document.body.appendChild(div);
        // set the style of the div
        div.style.backgroundColor = this.head.color;
        div.style.height = this.head.height;
        div.style.width = this.head.width;
        div.style.borderRadius = this.head.radius;
        div.style.position = this.head.position;
      };
      createLeftEye= function () {
        const div = document.createElement("div");
        this.left = div;
        div.style.transition = 'all 1s ease';
        // place it in the body
        this.face.appendChild(div);
        // set the style of the div
        div.style.backgroundColor = this.leftEye.color;
        div.style.height = this.leftEye.height;
        div.style.width = this.leftEye.width;
        div.style.borderRadius = this.leftEye.radius;
        div.style.position = this.leftEye.position;
        div.style.top = this.leftEye.top;
        div.style.left = this.leftEye.left;
        
      };
      createRightEye = function () {
        const div = document.createElement("div");
        // place it in the body
        this.face.appendChild(div);
        // set the style of the div
        div.style.backgroundColor = this.rightEye.color;
        div.style.height = this.rightEye.height;
        div.style.width = this.rightEye.width;
        div.style.borderRadius = this.rightEye.radius;
        div.style.position = this.rightEye.position;
        div.style.top = this.rightEye.top;
        div.style.right = this.rightEye.right;
      };
      createMouth = function () {
        const div = document.createElement("div");
        // place it in the body
        this.face.appendChild(div);
        // set the style of the div
        div.style.backgroundColor = this.mouth.color;
        div.style.height = this.mouth.height;
        div.style.width = this.mouth.width;
        div.style.borderRadius = this.mouth.radius;
        div.style.position = this.mouth.position;
        div.style.top = this.mouth.top;
        div.style.right = this.mouth.right;
        div.style.borderBottom = this.mouth.borderBottom;
      };
};
    
    const dog1 = new Dog();

    const SpeakButton = document.createElement('button')
    SpeakButton.innerHTML = `Speak, ${dog1.dog.name}!`
    SpeakButton.addEventListener('click', () => dog1.dog. speak());
    const RollButton = document.createElement('button')
    RollButton.innerHTML = `Roll over, ${dog1.dog.name}!`
    // RollButton.addEventListener('click', () => this.style.transform.rotate(180deg);
    document.querySelector('body').appendChild(SpeakButton)
    document.querySelector('body').appendChild(RollButton)


    // transform: rotate(20deg)

    // #myDIV {
    //     margin: auto;
    //     border: 1px solid black;
    //     width: 200px;
    //     height: 100px;
    //     background-color: coral;
    //     color: white;
    //     animation: mymove 5s infinite;
    //   }
      
    //   @keyframes mymove {
    //     50% {transform: rotate(180deg);}
    //   }
    //   </style>
    //   </head>
    //   <body>
      
    //   <h1>Animation of transform</h1>
      
    //   <p>Gradually rotate the DIV element 180 degrees, and back:<p>
      
    //   <div id="myDIV">
    //     <h1>myDIV</h1>
    //   </div>
      
    //   </body>
    //   </html>
      