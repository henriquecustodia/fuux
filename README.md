# flex-boy [UNDER DEVELOPMENT]
This is a Flexbox library to structure html templates easily!  

## Motivation
I like the Angular Material library and the approach using directives based on Flexbox, is amazing really. 
But sometimes we can't to use Angular Material, because sometimes we should to use another library or template. 
Thinking about that, I have created this library to independently which template we've to use, we'll can to use Flexbox semanticly and easily, into any project. \o/ 

## Features
* Writes all using just css classes
* Support to ``flex-direction``, ``justify-content``, ``align-items``, ``flex-wrap`` and ``flex-basis``.
    * support to other properties is under development.
* Support to responsive classes

## How to install 
> ~~npm install --save flex-boy~~
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
The result is:

![alt tag](https://github.com/henriquecustodia/flex-boy/blob/master/images/example.png)

> The code above you can see [here](https://github.com/henriquecustodia/flex-boy/blob/master/examples/basic.html).

## Documentation

### Basic 
**Flexboy** is purely [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes), then everything you can do with Flexbox, you can do with Flexboy!

The basic structure to do anything with this library is:

```html
<div class="flex-row|flex-column">
     <div class="flex-100" ></div>
</div> 
```

### API Reference
All Flexboy's classes always start with `flex` prefix. 

#### Directions

##### ``flex-column``
```css
   flex-direction: column
```

##### ``flex-row``
```css
   flex-direction: row
```

#### Wrap

##### ``flex-wrap``
```css
    flex-wrap: wrap 
```

#### Alignment

##### ``flex-start`` or ``flex-start-start``
```css
   justify-content: flex-start
   align-items: flex-start
```

##### ``flex-start-center``
```css
   justify-content: flex-start
   align-items: center
```

##### ``flex-start-end``
```css
   justify-content: flex-start
   align-items: flex-end
```

##### ``flex-center-start``
```css
   justify-content: center
   align-items: flex-start
```

##### ``flex-center`` or ``flex-center-center``
```css
   justify-content: center
   align-items: center
```

##### ``flex-center-end``
```css
   justify-content: center
   align-items: flex-end
```

##### ``flex-end-start``
```css
   justify-content: flex-end
   align-items: flex-start
```

##### ``flex-end-center``
```css
   justify-content: flex-end
   align-items: center
```

##### ``flex-end`` or ``flex-end-end``
```css
   justify-content: flex-end
   align-items: flex-end
```

#### Basis
The Flexboy's basis are values from 5 to 100 (Multiples of five)

For example: 
##### ``flex-5``
```css
    flex-basis: 5
```
Or 
##### ``flex-100``
```css
    flex-basis: 100
```

### Responsive

Flexboy uses prefixes to manage which classes should be used for each resolution.

#### Usage
Add the responsive prefix to the classes to use on specific resolution, for example:

``flex-[responsive prefix]-[property]`` 
> flex-md-center

#### Responsive Table

<table>
   <tr>
     <th>Prefix</th>
     <th><= 767px</th>
     <th>>= 768px</th>
     <th>>= 768px and <= 991px</th>
     <th>>= 992px</th>
     <th>>= 992px and <= 1199px</th>
     <th>>= 1200px</th>
   </tr>
   <tr>
       <td>xs</td>
       <td align="center"><b><em>V</em></b></td>
       <td align="center"><em>X</em></td>
       <td align="center"><em>X</em></td>
       <td align="center"><em>X</em></td>
       <td align="center"><em>X</em></td>
       <td align="center"><em>X</em></td>
   </tr>
   <tr>
       <td>sm</td>
       <td align="center"><em>X</em></td>
       <td align="center"><b><em>V</em></b></td>
       <td align="center"><b><em>V</em></b></td>
       <td align="center"><b><em>V</em></b></td>
       <td align="center"><b><em>V</em></b></td>
       <td align="center"><b><em>V</em></b></td>
   </tr>
   <tr>
      <td>smx</td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><b><em>V</em></b></td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
   </tr>
   <tr>
      <td>md</td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><b><em>V</em></b></td>
      <td align="center"><b><em>V</em></b></td>
      <td align="center"><b><em>V</em></b></td>
   </tr>
   <tr>
      <td>mdx</td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><b><em>V</em></b></td>
      <td align="center"><em>X</em></td>
   </tr>
   <tr>
      <td>lg</td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><em>X</em></td>
      <td align="center"><b><em>V</em></b></td>
   </tr>
</table>




