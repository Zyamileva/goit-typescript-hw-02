/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface CT {
  title: string;
}

class Component {
  constructor(public props: CT) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
