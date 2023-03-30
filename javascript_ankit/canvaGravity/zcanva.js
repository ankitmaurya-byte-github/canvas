canva=document.querySelector('canvas')
canva.height=innerHeight;
canva.width=innerWidth;
c=canva.getContext('2d')


ball=[]
colorarr=['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
function createarr(){
    ball=[]
    for(i=0;i<300;i++){
        x=Math.random()*innerWidth
        y=(Math.random()*(innerHeight-300))+50
        dy=Math.random()
        dx=(Math.random()-0.5)*4
        friction=0.8
        radius=(Math.random()*30)+15
        color=colorarr[Math.floor(Math.random()*colorarr.length)]
        grav=(Math.random())
        ball.push(new gravity(x,y,dy,dx,grav,friction,radius,color))
    }
}
createarr();

function gravity(x,y,dy,dx,grav,friction,radius,color){
    this.x=x;
    this.y=y;
    this.dy=dy
    this.dx=dx
    this.color=color
    this.friction=friction
    this.grav=grav
    this.radius=radius
    this.make=function (){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,3.16*2)
        c.fillStyle=this.color
        c.strokeStyle='black'
        c.fill()
        c.stroke()
        this.update()
    }
    this.update=function (){
        // this.x+=1
 
        if(this.radius+this.y+this.dy>window.innerHeight ){
            this.dy=-this.dy*this.friction
        }else{
            this.dy=this.dy+this.grav
        }
        if(this.radius+this.x+this.dx>window.innerWidth || this.x-this.radius<0){
            this.dx=-this.dx
        }
    
        this.y+=this.dy
        this.x+=this.dx

    }
}
addEventListener('resize',function(){
    this.cancelAnimationFrame(id)
    createarr()
animation()
})
    addEventListener("click",function(){
        this.cancelAnimationFrame(id)
        createarr()
    animation()
})
var id;
function animation(){
    id=requestAnimationFrame(animation)
    c.clearRect(0,0,innerWidth,innerHeight)
    for(i=0;i<300;i++){
        ball[i].make();
    }
}
animation();
    