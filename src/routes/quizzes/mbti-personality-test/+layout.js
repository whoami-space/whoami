import { goto } from "$app/navigation";
import { page } from "$app/state";
import { get, writable } from "svelte/store";



export async function load() {

    

    return {
    
    // Data do create and navigate between the steps
    goTo: function (link, setter) {
        setter.set(true)
        goto(link)
    },
    // counter variable
    counter: writable(0),
    countef: function Counter(select) {
      let counter = "counter";
      counter.set(select.reduce((items, current) => items + current, 0))
      return counter;

    },
    // Steps 
    steps: [
      1, 
    ]
    };
}