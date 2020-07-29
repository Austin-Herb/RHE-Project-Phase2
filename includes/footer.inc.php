<footer>
  <h5>Copyright 2019 | <a href="mailto://ajh45@pct.edu" title="email link to webmaster">Email Webmaster</a> |
    Last Updated: Mar 26, 2019</h5>
</footer>

<!-- Register Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="register_new_user"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="register_new_user">New User Registration</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form name="registerForm" id="registerForm" method="post" onSubmit="return validate_register_form();"
          action="xxx.php" novalidate>

          <!-- Modal Elements -->
          <!-- First Name -->
          <div class="form-group">
            <label for="register_firstname">First Name</label>
            <input type="text" class="form-control" id="register_firstname" placeholder="First Name"
              name="register_firstname">
            <div id="error_register_firstname"></div>
          </div>

          <!-- Last Name -->
          <div class="form-group">
            <label for="register_lastname">Last Name</label>
            <input type="text" class="form-control" id="register_lastname" placeholder="Last Name"
              name="register_lastname">
            <div id="error_register_lastname"></div>
          </div>

          <!-- Email Address -->
          <div class="form-group">
            <label for="register_email">Email Address</label>
            <input type="email" class="form-control" id="register_email" placeholder="name@example.com"
              name="register_email">
            <div id="error_register_email"></div>
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="register_password">Password</label>
            <input type="password" class="form-control" id="register_password" placeholder="Password"
              name="register_password">
            <div id="error_register_password"></div>
          </div>

          <!-- Confirm Password -->
          <div class="form-group">
            <label for="register_confirmPassword">Confirm Password</label>
            <input type="password" class="form-control" id="register_confirmPassword" placeholder="Confirm Password"
              name="register_confirmPassword">
          </div>

          <!-- Resident Approval Code -->
          <div class="form-group">
            <label for="register_residentApproval">Resident Approval Code</label>
            <input type="text" class="form-control" id="register_residentApproval" placeholder="Resident Approval Code"
              name="register_residentApproval">
            <div id="error_register_residentApproval"></div>
          </div>

          <!-- Check Box -->
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="register_norobot">
            <label class="form-check-label" for="register_norobot">I am not a robot.</label>
            <div id="error_register_norobot"></div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Login Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="login_existing_user"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="login_existing_user">Existing User Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form name="loginForm" id="loginForm" method="post" onSubmit="return validateLoginForm();" action="xxx.php"
          novalidate>

          <!-- Modal Elements -->
          <!-- Email Address -->
          <div class="form-group">
            <label for="login_email">Email Address</label>
            <input type="email" class="form-control" id="login_email" placeholder="name@example.com" name="login_email">
            <div id="error_login_email"></div>
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="login_password">Password</label>
            <input type="password" class="form-control" id="login_password" placeholder="Password"
              name="login_password">
            <div id="error_login_password"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>

<!-- Custom Javascript -->

<script src="js/registerForm.js"></script>
<script src="js/loginForm.js"></script>

</body>
</html>