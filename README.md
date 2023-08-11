## Setup
```
npm install
npm run start
```
    
## How and what to author?
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
- Add order

      
### Explanation breakpoint configuration

```
// array of breakpoint configuration
[
    {
        "order": "2", // breakpoint order according to Mobile first approach
        "breakpoint": "772", // breakpoint value
        "minWidth": "800", // minimum width beyond which breakpoint will work
        "margin": "40", // minimum space from screen beyond width
        "gutter": "20", // gutter between the columns
        "class": "tb-" // class name for the breakpoint
    }
    ...
]
```


### Whats next?    
1. For simplicity, default values with format are already present in the form. Modify/Add as you need.    
    
2. After adding your setting/configuration. Click on Generate.    
    
3. Your css and demo html will be generated in dist folder and you will be redirected to the demo link to play around;  
     