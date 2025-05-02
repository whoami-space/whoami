import { goto } from "$app/navigation";
import { page } from "$app/state";
import { get, writable } from "svelte/store";


export async function load() { 

    

    return {
    
    // Data do create and navigate between the steps
      stepOne: writable(false),
      stepTwo: writable(false),
      stepThree: writable(false),
      stepFour: writable(false),
      result: writable(false),
      goTo: function (link, setter) {
        setter.set(true)
        goto(link)
      },
    // counter variable
    counter: writable(0),
    // Selects
    selectsOne: [
        {
          question: "How do you feel",
          options: [
            { value: 1, name: 'Go to bed' },
            { value: 2, name: 'Eat a lot' },
            { value: 3, name: 'Run or practice sports' }, 
            { value: 4, name: 'Go with people' },
            { value: 5, name: 'Nothing interesting' },
            { value: 6, name: 'I go to cinema' },
            { value: 7, name: 'Drive' },
            { value: 8, name: 'Play a game' },
          ],
          selected: 0,
        },
        {
          question: "How do you feel",
          options: [
            { value: 1, name: 'Go to bed' },
            { value: 2, name: 'Eat a lot' },
            { value: 3, name: 'Run or practice sports' }, 
            { value: 4, name: 'Go with people' },
            { value: 5, name: 'Nothing interesting' },
            { value: 6, name: 'I go to cinema' },
            { value: 7, name: 'Drive' },
            { value: 8, name: 'Play a game' },
          ],
          selected: 0,
        },
    ]
    
    

    };
}