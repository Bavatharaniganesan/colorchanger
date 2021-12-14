import React from 'react';
import Select from 'react-select';
import { useState } from 'react';

function ColorChanger() {
    var colors = [
        {
            label: 'Lime',
            value: "lime"
        },
        {
           label: 'Lavender',
            value: "lavender"
        },
        {
            label: 'Crimson',
            value: "crimson"

        },

        {

            label: 'Darkblue',
            value: "darkblue"
        },

        {
            label: 'Teal',
            value: "teal"
        },

        {
            label: 'Rebecca Purple',
            value: "rebeccapurple"
        },

        {
            label: 'Ghost White',
            value: "ghostwhite"

        },

        {
            label: 'Aqua Marine',
            value: "aquamarine"

        },

        {
            label: 'Alice Blue',
            value: "aliceblue"
        }
    ];
    var [setColorChanger,value]=useState(colors.label);
    var handle = e =>
    {
        value(e.label);
    }
    return(
        <div>
            <style>{'body {background-color:'+setColorChanger+';}'}</style>
            <Select options={colors} onChange={handle}></Select>
            <center>
                <b>The color is : {setColorChanger}</b>
            </center>
        </div>
    );
}
export default ColorChanger;
