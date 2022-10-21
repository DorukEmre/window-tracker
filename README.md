React app that tracks and displays the window size.

A button can hide/show the tracker.
In effect, this mounts/unmounts the WindowTracker component

The window size is saved as a state and is updated with the useEffect function thanks to an event listener on the browser window.
The event listener is cleaned up when the component is unmounted.
