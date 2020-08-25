interface Path {
    path: string;
}

export default function (path: Path) {
    return `http://localhost:3333/files/${path}`;
}
