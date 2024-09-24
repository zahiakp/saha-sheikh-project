function getFirstPath(pathname:any) {
    // Split the pathname by '/' and filter out empty strings
    const parts = pathname.split('/').filter(
        (part:any) => part !== '');
    
    // Return the first part with a leading '/'
    return parts.length > 0 ? `/admin/${parts[0]}` : '/admin/';
}