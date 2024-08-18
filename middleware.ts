export { default } from 'next-auth/middleware';


// Which apis should we apply this middleware
// apply + to edit api that mean one or more  
export const config = {
    matcher: [
        '/issues/new',
        '/issues/edit/:id+'
    ]
}