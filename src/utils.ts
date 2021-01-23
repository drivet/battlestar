export function toConst<K extends string>(values: K[]): {[k in K]: K} {
    return values.reduce((a, v) => {
        return {...a, [v]: v}
    }, {} as {[k in K]: K});
}
