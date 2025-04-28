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
    // Other data
    

    };
}