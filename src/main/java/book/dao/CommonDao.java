package book.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import javax.annotation.Resource;

/**
 * 这个类是为了自动注入SqlSessionDaoSupport
 * mybatis1.2之后取消了自动注入(为了兼容多数据源)
 *
 * @author hui zhang
 * @date 2018/3/20
 */
public class CommonDao extends SqlSessionDaoSupport {

    @Resource
    public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate)
    {
        super.setSqlSessionTemplate(sqlSessionTemplate);
    }

}
