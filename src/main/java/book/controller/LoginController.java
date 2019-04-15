package book.controller;

import book.domain.dto.UserDTO;
import book.domain.exception.BusinessException;
import book.domain.result.SimpleResult;
import book.service.LoginService;
import book.util.ExceptionHandler;
import book.util.LoggerUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * @author hui zhang
 * @date 2018/3/19
 */
@Controller
public class LoginController {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);

    @Resource(name = "LoginService")
    private LoginService loginService;

    @RequestMapping(value = {"/", "/login"})
    public String toLogin() {
        return "login";
    }

    @RequestMapping("/login/check")
    @ResponseBody
    public SimpleResult<String> loginCheck(String username, String password, HttpSession httpSession) {
        LoggerUtil.info(LOGGER, "enter in LoginController[LoginCheck],username:{0},password:{1}", username, password);
        //如果用户名密码存在则参考返回类型
        SimpleResult<String> result=new SimpleResult<>();
        try {
            UserDTO userDTO = loginService.hasMatchUser(username, password);
            //不返回前端密码
            userDTO.setPassword("");
            httpSession.setAttribute("isLogin", userDTO);
            result.setResult(userDTO.getUserStatus());
            result.setSuccess(true);
        } catch (
                BusinessException be) {
            ExceptionHandler.handleBusinessException(LOGGER, result, be, "查询用户是否存在错误,username:{0},password:{1}", username, password);
        } catch (Exception ex) {
            ExceptionHandler.handleSystemException(LOGGER, result, ex, "查询用户是否存在错误,username:{0},password:{1}", username, password);
        }
        return result;
    }

    @RequestMapping(value = "logout",method = RequestMethod.GET)
    public String logout(HttpSession httpSession){
        LoggerUtil.info(LOGGER,"enter in LoginController[LoginCheck]");
        UserDTO userDTO = (UserDTO) httpSession.getAttribute("isLogin");
        if (userDTO!=null){
            LoggerUtil.info(LOGGER, "delete session,userDTO:{0}", userDTO);
            httpSession.invalidate();
        }
        return "redirect:/login";
    }
}
