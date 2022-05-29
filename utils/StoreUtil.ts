export const TagMaker = (_tagArr: string[]) => {
    var tag = "";

    _tagArr.map((str: string) => {
        tag = `${tag}#${str.replace(" ", "_")} `;
    });

    return tag;
}