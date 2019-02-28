import React from 'react';

import './index.scss';

import { Accordion} from 'semantic-ui-react'


class Category extends React.Component {
  
    render() {
        var items = [{
            "id": 1,
            "name": "Electronics",
            "parent": 0
        }, {
            "id": 2,
            "name": "Telivision",
            "parent": 1
        }, {
            "id": 3,
            "name": "Standard TV",
            "parent": 2
        }, {
            "id": 4,
            "name": "Smart TV",
            "parent": 2
        }, {
            "id": 5,
            "name": "Men",
            "parent": 0
        }, {
            "id": 6,
            "name": "Men's Clothing",
            "parent": 5
        }, {
            "id": 7,
            "name": "Jeans",
            "parent": 6
        }, {
            "id": 8,
            "name": "Sportwear",
            "parent": 6
        }, {
            "id": 9,
            "name": "Formals",
            "parent": 6
        }, {
            "id": 10,
            "name": "Women",
            "parent": 0
        }, {
            "id": 11,
            "name": "Womens Clothing",
            "parent": 10
        }, {
            "id": 12,
            "name": "Accessories",
            "parent": 10
        }, {
            "id": 13,
            "name": "Shoes",
            "parent": 10
        }];

        const level1Panels = [];

        function collectPanel1(item) {

            if (item.parent == 0) {
                var panel = {};
                panel.key = item.id;
                panel.title = item.name;
                panel.subPanel = [];
                level1Panels.push(panel);

            }
        }

        function collectPanel2(item) {

            level1Panels.map(function(level1) {
                if (level1.key == item.parent) {
                    var panel = {};
                    panel.key = item.id;
                    panel.title = item.name;
                    panel.subPanel = [];
                    level1.subPanel.push(panel);

                }

            })

        }
        
        
        function collectPanel3(item){
            level1Panels.map(function(level1) {
                
                level1.subPanel.map(function(level2){
                    
                    if (level2.key == item.parent) {
                    var panel = {};
                    panel.key = item.id;
                    panel.title = item.name;
                    panel.subPanel = [];
                    level2.subPanel.push(panel);

                }
                    
                })
                
                
            })
            
        }

        function myFunction() {
            items.map(collectPanel1)
            items.map(collectPanel2)
            items.map(collectPanel3)
        }

        myFunction();
        var rootPanels=[];

        level1Panels.map(function(level){

            var temp =[]
            var tempobj = {}
            var Level2Content;
            tempobj.key=level.key;
            tempobj.title=level.title;
            tempobj.content ={};
            level.subPanel.map(function(item){
                   
                var obj ={}
                obj.key=item.key;
                obj.title=item.title;
                temp.push(obj);

                Level2Content = (
                    <div>
                      <Accordion.Accordion panels={temp} />
                    </div>
                  )

               
        })   

            tempobj.content.content=Level2Content;
            rootPanels.push(tempobj);
                
        })
    
        return (
           
            <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
        );
    }
}

export default Category;
