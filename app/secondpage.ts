import { EventData, Observable } from "data/observable";
import { Page } from "ui/page";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function onNavigatedTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
     page.bindingContext = {title:"Dynamic title"};
}