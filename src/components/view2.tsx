import React, {useState} from 'react';
import nudges from "../utils/jsx-utils";
import {NudgeModel} from "../models/nudge.model";


function View2 ()  {
    const n: NudgeModel[] = [
        {
            title: 'Testing',
            body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ante id ligula facilisis iaculis'],
            linkText: 'submit',
            linkHref: 'https://www.google.com'
        },
        {
            title: 'Here we go',
            body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ante id ligula facilisis iaculis'],
            linkText: 'submit',
            linkHref: 'https://www.google.com'
        },
        {
            title: 'Yes we are here',
            body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ante id ligula facilisis iaculis'],
            linkText: 'submit',
            linkHref: 'https://www.google.com'
        }
    ]
    const [nudgeList] = useState<NudgeModel[]>(n);

    return (
        <>
            {nudges(nudgeList)}
        </>
    )
}



export default (View2);
