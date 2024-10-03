import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function httpTriggerPost2(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('httpTriggerPost2', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: httpTriggerPost2,
    route: "post2"
});


