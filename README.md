# flex-boy
This is a Flexbox library to structure html templates easily!  

## Motivation
I like the Angular Material library and the approach using directives based on Flexbox, is amazing really. 
But sometimes we can't to use Angular Material, because sometimes we should to use another library or template. 
Thinking about that, I have created this library to independently which template we've to use, we'll can to use Flexbox semanticly and easily, into any project. \o/ 

## How to install 
> npm install --save flex-boy
#### We have to publish on npm yet

## Get started
```html
<div class="green flex-column flex-15 flex-center">
    <span>Sidenav</span>
</div>
    
<div class="flex-column flex-85">

     <div class="coral flex-10 flex-center">
        <span>Toolbar</span> 
    </div>

    <div class="blue flex-90 flex-center">
        <span>Content</span> 
    </div>

</div>
```

