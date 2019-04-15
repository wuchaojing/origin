package book.domain.dataobject;

import book.domain.BaseObject;
import org.apache.commons.lang.StringUtils;

import java.util.Date;

/**
 * @author hui zhang
 * @date 2018/3/20
 */
public class UserDO extends BaseObject{

    private long userId;

    private String username;

    private String password;

    /**
     * @see book.domain.Enum.StatusEnum
     * 用户状态
     */
    private String userStatus;

    private Date gmtCreate;

    private Date gmtModified;

    private String modifier;

    private String email;

    private String phoneNumber;

    private Integer age;

    private Integer sex;

    private String profession;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(String userStatus) {
        this.userStatus = userStatus;
    }

    public Date getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    public Date getGmtModified() {
        return gmtModified;
    }

    public void setGmtModified(Date gmtModified) {
        this.gmtModified = gmtModified;
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof  UserDO){
            UserDO userDO=(UserDO)obj;
            return StringUtils.equals(String.valueOf(age),String.valueOf(userDO.getAge()))&&StringUtils.equals(String.valueOf(sex),String.valueOf(userDO.getSex()))&&StringUtils.equals(profession,userDO.getProfession());
        }
        return false;
    }
}
