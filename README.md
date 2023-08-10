## Setup
```
npm install
npm run start
```
    
## How and What to author?
System uses mobile first approach
      
### Choose grid type
- Add Grid type
- Add number of columns
      
### Customization
- Set container classname
- Set column prefix classname
- Set row classname
        
### Configuration    
- Add breakpoint set 
- Add breakpoint margin
- Add breakpoint gutter
- Add class name
- Add minWidth
- Add order (!important)

      
### Example for breakpoint configuration

```
[{
    "order": "1",
    "breakpoint": "0",
    "minWidth": "500",
    "margin": "15",
    "gutter": "10",
    "class": "mob-"
},{
    "order": "2",
    "breakpoint": "772",
    "minWidth": "800",
    "margin": "40",
    "gutter": "20",
    "class": "tb-"
},{
    "order": "3",
    "breakpoint": "992",
    "minWidth": "1280",
    "margin": "80",
    "gutter": "40",
    "class": "desk-"
}]
```


### Whats next?    
After adding your setting/configuration. Click on Generate.
Your css and html will be generated in dist folder     
     