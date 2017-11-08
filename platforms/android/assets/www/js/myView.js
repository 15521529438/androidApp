/**
 * Created by Administrator on 2017/11/8.
 */
function get_id_code(){
    var alias = "别名alias";
    var dd = [];
    dd.push("标签tags");
    window.plugins.jPushPlugin.setTagsWithAlias(dd,alias);
}