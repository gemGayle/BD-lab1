# 🧪 Тестування працездатності системи

## ✅ Засоби тестування

Для тестування функціональності DAO-рівня було використано:

* **Java 17**
* **JDBC** (з'єднання з MySQL)
* **MySQL** — для зберігання та перевірки даних
* **Власні Java main-класи** як тестові сценарії (`MainUserRoleTest`, `MainMediaContentTest` тощо)
* Компіляція і запуск через **PowerShell / Command Prompt**

---

## 🧾 Структура тестів

Кожен тест реалізований у вигляді окремого класу `Main<ClassName>Test.java`, який:

* Встановлює з'єднання з базою даних
* Викликає методи DAO-реалізацій (наприклад, `addMediaContent`, `getById`)
* Виводить результати виконання операцій у консоль

---

## 📁 Приклад вихідного коду тесту

**`MainPermissionTest.java`**

```java
import dao.PermissionDAOImpl;
import model.Permission;

import java.sql.*;
import java.util.List;

public class MainPermissionTest {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/bd_lab";
        String user = "root";
        String password = "";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("Connected to database!");

            PermissionDAOImpl permissionDao = new PermissionDAOImpl(conn);

            // Додати новий дозвіл
            Permission newPermission = new Permission(0, "EDIT_CONTENT");
            permissionDao.addPermission(newPermission);
            System.out.println("Permission inserted!");

            // Отримати всі дозволи
            List<Permission> permissions = permissionDao.getAllPermissions();
            for (Permission p : permissions) {
                System.out.println(p.getId() + ": " + p.getName());
            }

            // Отримати дозвіл за ID (наприклад, останній)
            if (!permissions.isEmpty()) {
                int lastId = permissions.get(permissions.size() - 1).getId();
                Permission retrieved = permissionDao.getPermissionById(lastId);
                if (retrieved != null) {
                    System.out.println("Retrieved: " + retrieved.getName());

                    // Оновити
                    retrieved.setName("UPDATED_PERMISSION");
                    permissionDao.updatePermission(retrieved);
                    System.out.println("Permission updated!");

                    // Видалити
                    permissionDao.deletePermission(lastId);
                    System.out.println("Permission deleted!");
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

```

**`PermissionDAOImpl.java`**

```java
package dao;

import model.Permission;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PermissionDAOImpl implements PermissionDAO {
    private Connection connection;

    public PermissionDAOImpl(Connection connection) {
        this.connection = connection;
    }

    @Override
    public void addPermission(Permission permission) throws SQLException {
        String sql = "INSERT INTO Permission (name) VALUES (?)";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setString(1, permission.getName());
            ps.executeUpdate();
        }
    }

    @Override
    public Permission getPermissionById(int id) throws SQLException {
        String sql = "SELECT * FROM Permission WHERE id = ?";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return new Permission(
                        rs.getInt("id"),
                        rs.getString("name")
                    );
                }
            }
        }
        return null;
    }

    @Override
    public List<Permission> getAllPermissions() throws SQLException {
        List<Permission> permissions = new ArrayList<>();
        String sql = "SELECT * FROM Permission";
        try (Statement st = connection.createStatement();
             ResultSet rs = st.executeQuery(sql)) {
            while (rs.next()) {
                permissions.add(new Permission(
                    rs.getInt("id"),
                    rs.getString("name")
                ));
            }
        }
        return permissions;
    }

    @Override
    public void updatePermission(Permission permission) throws SQLException {
        String sql = "UPDATE Permission SET name = ? WHERE id = ?";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setString(1, permission.getName());
            ps.setInt(2, permission.getId());
            ps.executeUpdate();
        }
    }

    @Override
    public void deletePermission(int id) throws SQLException {
        String sql = "DELETE FROM Permission WHERE id = ?";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setInt(1, id);
            ps.executeUpdate();
        }
    }
}
```
---

## 📤 Результати тестування

![зображення](https://github.com/user-attachments/assets/9271f91e-dbdc-4369-a504-01136a2ccbb7)
