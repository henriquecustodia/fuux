
<div align="center">
   <img src="https://github.com/henriquecustodia/flex-boy/blob/master/fuux.gif" width="300px" height="300px">
</div>

# Fuux 
:cyclone: :sunglasses: flexbox library to create amazing layouts 
 
## Features
* Writes all using just css classes
* Support to ``flex-direction``, ``justify-content``, ``align-items``, ``flex-wrap`` and ``flex-basis``.
    * support to other properties is under development.
* Support to responsive classes
* Support for [autoprefixer](https://github.com/postcss/autoprefixer)

## How to install 
``npm install --save fuux``

## Get started
```html
<div class="green fx-column fx-15 fx-center">
    <span>Sidenav</span>
</div>
    
<div class="fx-column fx-85">

     <div class="coral fx-10 fx-center">
        <span>Toolbar</span> 
    </div>

    <div class="blue fx-90 fx-center">
        <span>Content</span> 
    </div>

</div>
```
The result is:

![alt tag](https://github.com/henriquecustodia/flex-boy/blob/master/images/example.png)

> The code above you can see [here](https://github.com/henriquecustodia/flex-boy/blob/master/examples/basic.html).

## Documentation

### Basic 
**Fuux** is purely [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes), then everything you can do with Flexbox, you can do with Fuux!

The basic structure to do anything with this library is:

```html
<div class="fx-row|fx-column">
     <div class="fx-100" ></div>
</div> 
```

### API Reference
All Fuux's classes always starts with `fx` prefix. 

#### Directions

##### ``fx-column``
```css
   flex-direction: column
```

##### ``fx-row``
```css
   flex-direction: row
```

#### Wrap

##### ``fx-wrap``
```css
    flex-wrap: wrap 
```

#### Alignment

##### ``fx-start`` or ``fx-start-start``
```css
   justify-content: flex-start
   align-items: flex-start
```

##### ``fx-start-center``
```css
   justify-content: flex-start
   align-items: center
```

##### ``fx-start-end``
```css
   justify-content: flex-start
   align-items: flex-end
```

##### ``fx-center-start``
```css
   justify-content: center
   align-items: flex-start
```

##### ``fx-center`` or ``fx-center-center``
```css
   justify-content: center
   align-items: center
```

##### ``fx-center-end``
```css
   justify-content: center
   align-items: flex-end
```

##### ``fx-end-start``
```css
   justify-content: flex-end
   align-items: flex-start
```

##### ``fx-end-center``
```css
   justify-content: flex-end
   align-items: center
```

##### ``fx-end`` or ``fx-end-end``
```css
   justify-content: flex-end
   align-items: flex-end
```

#### Basis
The Fuux's basis are values from 5 to 100 (Multiples of five)

For example: 
##### ``fx-5``
```css
    flex-basis: 5%
```
Or 
##### ``fx-100``
```css
    flex-basis: 100%
```

### Responsive

Fuux uses prefixes to manage which classes should be used for each resolution.

#### Usage
Add the responsive prefix to the classes to use on specific resolution, for example:

``fx-[responsive prefix]-[property]`` 
> fx-md-center

#### Responsive Table

<table>
   <tr>
     <th>Prefix</th>
     <th>Media</th>
   </tr>
   <tr>
       <td>xs</td>
       <td align="center"> (max-width: 599px) </td>
   </tr>
   <tr>
       <td>gt-xs</td>
       <td align="center"> (min-width: 600px) </td>
   </tr>
   <tr>
      <td>sm</td>
      <td align="center">(min-width: 600px)  and (max-width: 959px) </td>
   </tr>
   <tr>
      <td>gt-sm</td>
      <td align="center">(min-width: 960px) </td>
   </tr>
   <tr>
      <td>md</td>
      <td align="center">(min-width: 960px)  and (max-width: 1279px) </td>
   </tr>
   <tr>
      <td>gt-md</td>
      <td align="center">(min-width: 1280px) </td>
   </tr>
   <tr>
      <td>lg</td>
      <td align="center">(min-width: 1280px)  and (max-width: 1919px) </td>
   </tr>
   <tr>
      <td>gt-lg</td>
      <td align="center">(min-width: 1920px) </td>
   </tr>
   <tr>
      <td>xl</td>
      <td align="center">(min-width: 1920px)  and (max-width: 5000px) </td>
   </tr>
</table>

## How to run
To run the Fuux on your machine:  

``npm install``

``gulp``


## Contributions 
Contributions is very welcome.
If you want to contribute just follow the steps:
* Fork this repository
* Make your changes :p
* Create a branch for your changes in this repository 
* Create a Pull Request to your created branch as target

Enjoy!


